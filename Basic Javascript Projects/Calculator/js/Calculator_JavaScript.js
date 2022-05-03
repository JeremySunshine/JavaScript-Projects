// CREATES AN OBJECT TO KEEP TRACK OF VALUES
const Calculator = {
    // THIS DISPLAYS THE SCREEN 
    Display_Value: '0',
    // THIS WILL HOLF THE FIRST OPERAND FOR ANY EXPRESSIONS
    // WE SET IT TI NULL FOR NOW
    First_Operand: null,
    // THIS CHECKS WHETHER OR NOT THE SECOND OPERAND HAS BEEN INPUT
    Wait_Second_Operand: false,
    // THIS WILL HOLD THE OPERATOR, WE SET IT TO NULL FOR NOW
    operator: null,
};

// THIS MODIFIES VALUES EACH TIME A BUTTON IS CLICKED
    function Input_Digit(digit) {
        const { Display_Value, Wait_Second_Operand } = Calculator;
        // WE ARE CHECKING TO SEE IF WAIT_SECOND_OPERAND IS TRUE AND SET
        // Display_Value TO THE KEY THAT WAS CLICKED
        if (Wait_Second_Operand === true) {
            Calculator.Display_Value = digit;
            Calculator.Wait_Second_Operand = false;
        } else {
            // THIS OVERWRITES Display_Value IF THE CURRENT VALUE IS 0
            //OTHERWISE IT ADDS ONTO IT
            Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
        }
    }
    // THIS SECTION HANDLES DECIMAL POINTS
    function Input_Decimal(dot) {
        // THIS ENSURES THAT ACCIDENTAL CLICKING OF THE DECIMAL POINT
        // DOESN'T CAUSE BUGS IN OPERATION
        if (Calculator.Wait_Second_Operand === true) return;
        if (!Calculator.Display_Value.includes(dot)) {
            // WE ARE SAYING THAT IF THE DISPLAY VALUE DOES NOT CONTAIN A DECIMAL POINT
            // WE WANT TOADDS A DECIMAL POINT
            Calculator.Display_Value += dot;
        }
    }

    // THIS SECTION HANDLES OPERATORS
    function Handle_Operator(Next_Operator) {
        const { First_Operand, Display_Value, operator } = Calculator
        const Value_of_input = parseFloat(Display_Value);
        if (operator && Calculator.Wait_Second_Operand) {
            Calculator.operator = Next_Operator;
            return;
        }

        if (First_Operand == null) {
            Calculator.First_Operand = Value_of_input;
        } else if (operator) { // CHECKS TO SEE IS OPERATOR EXISTS
            const Value_now = First_Operand || 0;
            // IFF OPP EXISTS, PROPERTY LOOKUP IS PREFORMED FOR THE OPP
            // IN Preform_Calculation OBJECT AND THE FUNCTION THAT MATCHES THE
           //  OPERATOR IS EXECUCTED
           let result = Perform_Calculation[operator](Value_now, Value_of_input);
           // HERE WE ADD A FIXED AMOUNT OF NUMBERS AFER THE DECIMAL
           result = (result * 1).toString()
           Calculator.Display_Value = parseFloat(result);
           Calculator.First_Operand = parseFloat(result);
        }
        Calculator.Wait_Second_Operand = true;
        Calculator.operator = Next_Operator;
    }

    const Perform_Calculation = {
        '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,

        '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,

        '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,

        '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,

        '=': (First_Operand, Second_Operand) => Second_Operand,
    };

    function Calculator_Reset() {
        Calculator.Display_Value = '0';
        Calculator.First_Operand = null;
        Calculator.Wait_Second_Operand = false;
        Calculator.operator = null;
    }
    // THIS FUNCTION UPDATES THE SCREEN WITH THE CONTENTS OF Display_Value
    function Update_Display() {
        const display = document.querySelector('.calculator-screen');
        display.value = Calculator.Display_Value;
    }

    Update_Display();
        // TARGET VARIABLE IS AN OBJECT THAT REPRESENTS THE ELEMENT
        // THAT WAS CLICKED Update_Display();
    // tHIS SECTION MONITORS BUTTON CLICKS
    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', (event) => {
        // TARGET VARIABLE IS AN OBJECT THAT REPRESENTS THE ELEMENT
        // THAT WAS CLICKED
        const { target } = event;
        if (!target.matches('button')) {
            return;
        }


        if (target.classList.contains('operator')) {
            Handle_Operator(target.value);
            Update_Display();
            return;
        }
        if (target.classList.contains('decimal')) {
            Input_Decimal(target.value);
            Update_Display();
            return;
        }
        // ENSURES THAT AC CLEARS THE NUMBERS FROM THE CALCLATOR
        if (target.classList.contains('all-clear')) {
            Calculator_Reset();
            Update_Display();
            return;
        }
        Input_Digit(target.value);
        Update_Display();
    })

