const browsers = document.querySelector('#browsers')
const browserData = []
// const d = new Date()
// const monthName = d.toLocaleString('en-us', { month: 'short' })

// console.log(monthName)

const getData = () => {
	fetch('/data/browsers.json')
		.then(blob => blob.json())
		.then(data => browserData.push(...data))
		.then(data => renderResult(browserData))
		.catch(err => {
			console.log(err)
		})
}

const renderResult = arr => {
	// console.log(arr)

	// console.log(typeof Object.keys(arr))
	var result = Object.keys(arr).map(function(key) {
		return [Number(key), arr[key]]
	})

	console.log(
		JSON.stringify(result[0][1]['Market Share Perc'])
			.split(':', 2)[1]
			.match(/\d+/)[0]
	)

	// loop over values
	// for (let value of Object.values(arr)) {
	// 	console.log(value) // John, then 30
	// }

	// Object.keys(arr).forEach(function(key) {
	// 	console.log(key + ': ' + arr[key])
	// })

	const html = result
		.map(browser => {
			return `
			<li>
			${browser}
			</li>
			`
		})
		.join('')

	browsers.innerHTML = html
}

getData()
