
var spinner;

Handlebars.registerHelper("math", function(lvalue, operator, rvalue, options) {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);

    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue
    }[operator];
});

var browsers = {

        handlerData:function(resJSON){

            var templateSource   = $("#browser-template").html(),

              template = Handlebars.compile(templateSource),
              browserHTML = template(resJSON);

  	           spinner.stop();
               $("#container").append( template({browsers:resJSON}) );
               $('.timer').countTo();
               $('footer').addClass('active');

               browsers.makeDonut(resJSON);

        },

        makeDonut:function(resJSON) {

          var dataSource = [];
          var total;
          var totalCounted = 0;
          var others;

          // $.each(resJSON, function(idx, obj) {
          //   totalCounted += parseInt(obj.market);
          // });

          $.each(resJSON, function(idx, obj) {
            dataSource.push({browserMarket: parseInt(obj.market), browserName: obj.browser});
            // return idx < 10;
          });

          // dataSource.push({browserMarket: (100-totalCounted), browserName: 'Övriga'});

          var browser_palette = [
            '#0d2671',
            '#0f2b80',
            '#11318f',
            '#d9ca00',
            '#b7ab00',
            '#c8ba00',
            '#514c00',
            '#958b00',
            '#a69b00',
            '#514c00',
            '#403c00',
            '#666'
          ];

          DevExpress.viz.core.registerPalette('mySuperPalette', browser_palette);

          $("#browserdonut").dxPieChart({
              size:{
                  width: 800,
                  height: 600
              },
              dataSource: dataSource,
              tooltip: {
                enabled: true,
                percentPrecision: 2,
                customizeText: function() {
                  return this.argumentText + " - " +this.valueText + '%';
                }
              },
              palette: 'mySuperPalette',
              legend: { visible: false },
              series: [
                  {
                      argumentField: "browserName",
                      valueField: "browserMarket",
                      type: "doughnut",
                      label:{
                          visible: true,
                          customizeText: function(){
                            return this.argumentText + ' - ' + this.valueText + '%';
                          },
                          connector:{
                              visible: true,
                              width: 1
                          }
                      }
                  }
              ],
              title: { visible: false }
          });

        },

        getbrowserData : function(){

            $.ajax({
                url: "../browsers.json",
                dataType: 'json',
                method: 'get',
                success: this.handlerData
                // success: handleData

            })
        },

        toTitleCase: function(str) {
            return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        },

        quickSearch: function(){

          $('#comboBox').focus();

          $('#comboBox').on('keydown keypress keyup change', function() {
              var search = browsers.toTitleCase(this.value);
              var $li = $("li").hide();

              if ($(this).val() !== '') {
                $li.filter(function() {
                  if($(this).text().indexOf(search) >= 0) {
                    // $("li").css('width', '20%').css('margin-right', '4%');
                    // $("li img").trigger("unveil");
                    return $(this).text().indexOf(search) >= 0;
                  }
                }).show();
              } else {
                console.log('empty');
                $("li").show();
                $("li").removeAttr( "style" );
              }


          });

        }
};

$(function() {

  browsers.getbrowserData();
	browsers.quickSearch();

    var opts = {
      lines: 9, // The number of lines to draw
      length: 3, // The length of each line
      width: 3, // The line thickness
      radius: 5, // The radius of the inner circle
      corners: 1, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#fff', // #rgb or #rrggbb or array of colors
      speed: 1.8, // Rounds per second
      trail: 60, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      top: 'auto', // Top position relative to parent in px
      left: 'auto' // Left position relative to parent in px
    };
    var target = document.getElementById('loader');
    spinner = new Spinner(opts).spin(target);

    if(window.location.href.indexOf("om") > -1) {
        $('footer').addClass('active');
    }

    // var pieChartDataSource = [
    //     {category: 'Oceania', value: 35},
    //     {category: 'Africa', value: 1016},
    //     {category: 'Americas', value: 936},
    //     {category: 'Asia', value: 4149},
    //     {category: 'Europe', value: 728}
    // ];



});

