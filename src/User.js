
export default class {
	constructor(client, user) {
		this._name = user.name

	}

	get name() {
		return this._name;
	}
}