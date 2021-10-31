

class Budget {
    constructor(budget) {
        this.budget = Number( budget );
        this.budgetLeft = this.budget;
    }
}


class HTML {


    insertBudget(amount) {

        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }
}

const addExpenseForm = document.querySelector('#add-expense'),
    budgetTotal = document.querySelector('span#total'),
    budgetLeft = document.querySelector('span#left');



let budget, userBudget;

const html = new HTML();



eventListeners();
function eventListeners() {

    document.addEventListener('DOMContentLoaded', function() {
        
        userBudget = prompt(' What\s your budget for this week? ');

        if(userBudget === null || userBudget === '' || userBudget === '0') {
            window.location.reload();
        } else {

            budget = new Budget(userBudget);

            
            html.insertBudget(budget.budget);
        }
    });

    addExpenseForm.addEventListener('submit', function(e) {
        e.preventDefault();
    });
}






