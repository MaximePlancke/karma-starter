import hello from '../src/hello'

describe('Hello function', () => {

	it('should create a div element', () => {

		hello('world')

		const divs = document.getElementsByTagName('div')

		expect(divs).to.have.length(1)
		expect(divs[0].innerText).to.equal('Hello world')

	})

})