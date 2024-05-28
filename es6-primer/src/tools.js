const logger = output => {
    console.log(output)
}
export const appName = "ES6 Review";
export const dummyFunction = () => {
    let feedback = "I am a dummy function";//mutable variable
    feedback = "I am still a dummy function";//value changed
    return feedback;
}
export default logger;

export const genericFunction4 = () => {
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++'];//declare an array of elements
    let [firstLang, secondLang] = languages;//assign first element in languages array to 
                                //firstLang and second element to secondLang.
return 'First language is $(firstLang) and the second is $(secondLang)'
}



