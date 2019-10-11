import { reset } from 'ansi-colors'

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
		return 'explorer'
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
		return 'safari'
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

			if (percentage >= 0.25)
				return `
					<div class="browser ${pickIcon(browserVersion)}" data-id="${pickIcon(
					browserVersion
				)}">
						<img src="/images/${pickIcon(
							browserVersion
						)}.svg" alt=´${browserVersion}´ role="presentation"/>
						<h2>${percentage}<span>%</span></h2>
						<h3>${browserVersion}</h3>
					</div>
				`
		})
		.join('')

	browsers.innerHTML = html
}

const checkBoxes = document.querySelectorAll('.filter li input')

let choices = []

const filter = () => {
	for (let checkbox of checkBoxes) {
		checkbox.addEventListener('click', checkFilters, false)
	}
}

const removeChoice = (array, element) => {
	return array.filter(el => el !== element)
}

const checkFilters = e => {
	for (let checkbox of checkBoxes) {
		if (e.target.id === 'reset') {
			resetFilters()
		}
		if (checkbox.checked) {
			choices.push(checkbox.value)
			showResults()
		} else {
			choices = removeChoice(choices, checkbox.id)
		}
	}
}

const resetFilters = () => {
	const items = document.querySelectorAll('.browser')
	for (let checkbox of checkBoxes) {
		checkbox.checked = false
		choices = []
		for (let item of items) {
			item.classList.remove('hidden')
		}
	}
}

const showResults = () => {
	const items = document.querySelectorAll('.browser')
	for (let item of items) {
		if (choices.includes(item.getAttribute('data-id'))) {
			item.classList.remove('hidden')
		} else {
			item.classList.add('hidden')
		}
	}
}

getData()
filter()
