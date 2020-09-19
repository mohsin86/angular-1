export class AccountsServices {
    accounts: {name: string, status: string}[] = [
        {
            name: 'Administratro Accounts',
            status: 'Active'
        },
        {
            name: 'Admin Accounts',
            status: 'InActive'
        },
        {
            name: 'Member Accounst',
            status: 'Unknown'
        }
    ];

    changeStatus(statusData: {index: number, status: string}): void{
        this.accounts[statusData.index].status = statusData.status;
    }

    addAccount(data: {name: string, status: string}): void{
        this.accounts.push(data);
    }

    getAccounName(index): string {
        return this.accounts[index].name;
    }

}
