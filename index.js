const fetch = require('node-fetch')
const csv = require('csvtojson')
const request = require('request')
const baseUrl = 'http://gs.statcounter.com/chart.php?'
var fs = require('fs')

const currentTime = new Date()
const month = ('0' + (currentTime.getMonth() + 1)).slice(-2)
const year = currentTime.getFullYear()

const endpoint = `${baseUrl}${year}${month}=undefined&bar=1&device=Desktop%20%26%20Mobile%20%26%20Tablet&device_hidden=desktop%2Bmobile%2Btablet&statType_hidden=browser_version&region_hidden=SE&granularity=monthly&statType=Browser%20Version&region=Sweden&fromInt=${year}${month}&toInt=${year}${month}&fromMonthYear=${year}-${month}&toMonthYear=${year}-${month}&multi-device=true&csv=1`

fetch(endpoint).then(data => {
	csv()
		.fromStream(request.get(endpoint))
		.subscribe(json => {
			return new Promise((resolve, reject) => {
				resolve('done')
			})
		})
		.then(result => {
			console.log(result)

			fs.writeFile(
				'../data/browsers.json',
				JSON.stringify(result),
				'utf8',
				(callback = err => {
					if (err) {
						return console.log(err)
					}
				})
			)
		})
})
