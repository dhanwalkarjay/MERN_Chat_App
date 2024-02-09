export const signup = async (res, req) =>{
    try {
        const {fullName, userName, passWord, confirmPassword, gender} = req.body;
    } catch (error) {
        
    }
}

export const login = (res, req) =>{
    console.log("login User");
}

export const logout = (res, req) =>{
    console.log("logout User");
}