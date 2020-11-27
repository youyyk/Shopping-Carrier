let accountList = []

export const updateAccount = ( dataAccount ) => {
    console.log("Update Account Data")
    accountList = []
    dataAccount.forEach((account) => {
        accountList.push(account)
    })
}

export let getAccountList = () => {
    return accountList
}

export const printAccountList = () => {
    accountList.forEach((account) => {
        console.log(account)
    })
}