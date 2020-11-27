function Account (identify, password){
    this.identify = identify
    this.password = password
}

export let newAccount = (identify, password) => {
    return new Account(identify, password)
}