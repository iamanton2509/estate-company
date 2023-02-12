import classes from './MyForm.module.css';

const MyForm = (props) => {
    return (
        <div className={classes.myFormContainer}>
            <form {...props} className={classes.myForm}>

            </form>
        </div>
    );
}

export default MyForm;