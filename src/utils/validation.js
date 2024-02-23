export const emailch = (email) => {
    const checkemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (!checkemail.test(email))
        return "enter correct email";
    else
        return null;
    
    
} 
export const passwordch = (password) => {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!re.test(password))
        return (
            <>
                <ul>
                    8 character password must contain the following:
                    
                    <li>
                        At least 1  uppercase letter 1 lowercase letter
                    </li>
                    <li>
                        At least 1 number
                    </li>
                    <li>
                        At least 1 special character
                    </li>
                </ul>
            </>
        );
    else
        return null;
}
