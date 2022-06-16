export const checkForm = async(formRef) => {
    const result = await formRef.value.validate();
    return result.valueOf();
}