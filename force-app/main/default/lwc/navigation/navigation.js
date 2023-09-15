import { LightningElement} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

//(encapsulate) for the funcationality of the NavigateMixin 
export default class Navigation extends NavigationMixin(LightningElement) {

    handlenavigate(){
        //navigate home to account obj
        // console.log('Navigated to Account Page')
        // this[NavigationMixin.Navigate]({
        //     type: 'standard__objectPage',
        //     attributes: {
        //         objectApiName:'Account',
        //         actionName: 'home' 
        //     }
        // })


    // navigate home to recent records of account
        // this[NavigationMixin.Navigate]({
        //     type: 'standard__objectPage',
        //     attributes: {
        //         objectApiName:'Account',
        //         actionName: 'list' 
        //     },
        //     state:{
        //         filterName: 'Recent'
        //     }
        // })

        // navigate home to account while  creating new record
        // this[NavigationMixin.Navigate]({
        //     type: 'standard__objectPage',
        //     attributes: {
        //         objectApiName:'Account',
        //         actionName: 'new' 
        //     }
        // })

        // navigate home to specific records of account ID
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: "0015j0000179c26AAA",
                objectApiName: 'Account',
                actionName: 'view'
            }
        });

        // Navigate to Edit Account Page
        // this[NavigationMixin.Navigate]({
        //     type: 'standard__recordPage',
        //     attributes: {
        //         recordId: this.recordId,
        //         objectApiName: 'Account',
        //         actionName: 'edit'
        //     },
        // });
    }
        
}