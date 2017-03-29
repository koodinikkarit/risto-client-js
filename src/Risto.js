const fs = require("fs");
const grpc = require("grpc");
const ristoservice = grpc.load("./risto_service/risto_service.proto").RistoService;

export default class {
	constructor(ip: string, port: number, token: string) {
		this.client = new ristoservice.Risto(`${ip}:${port}`, grpc.credentials.createInsecure());
	}

	createToken() {
		
	}

	createUser() {

	}

	fetchUserByToken() {

	}
}