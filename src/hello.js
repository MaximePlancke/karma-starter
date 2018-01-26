const hello = (text) => {

	const div = document.createElement('div')
	const textNode = document.createTextNode('Hello ' + text)

	div.appendChild(textNode)
	document.body.appendChild(div)

}

export default hello