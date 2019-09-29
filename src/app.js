const browsers = document.querySelector('#browsers')
const browserData = []

const getData = () => {
	fetch('/data/browsers.json')
		.then(blob => blob.json())
		.then(data => browserData.push(...data))
		.then(data => renderResult(browserData))
		.catch(err => {
			console.log(err)
		})
}

const pickIcon = browser => {
	if (browser.includes('Edge')) {
		return 'edge'
	}
	if (browser.includes('Explorer')) {
		return 'internet-explorer_9-11'
	}
	if (browser.includes('Chrome')) {
		return 'chrome'
	}
	if (browser.includes('Firefox')) {
		return 'firefox'
	}
	if (browser.includes('Samsung')) {
		return 'samsung-internet'
	}
	if (browser.includes('iPad')) {
		return 'safari-ios'
	}
	if (browser.includes('iPhone')) {
		return 'safari-ios'
	}
	if (
		browser.includes('Safari') &&
		!browser.includes('iPad') &&
		!browser.includes('iPad')
	) {
		return 'safari-ios'
	}
}

const renderResult = arr => {
	var result = Object.keys(arr).map(function(key) {
		return [Number(key), arr[key]]
	})

	const html = result
		.map(browser => {
			const browserVersion = JSON.stringify(browser[1]['Browser Version'])
				.replace(/"/g, '')
				.replace('IE', 'Internet Explorer')
			const percentage = JSON.stringify(browser[1]['Market Share Perc'])
				.split(':', 2)[1]
				.match(/\d+/)[0]

			if (percentage >= 0.5)
				return `
			<div class="browser ${pickIcon(browserVersion)}">
				<img src="/images/${pickIcon(browserVersion)}.svg"/>
				<h2>${percentage}<span>%</span></h2>
				<h3>${browserVersion}</h3>


			</div>
			`
		})
		.join('')

	browsers.innerHTML = html
}

getData()
