import { FormRules } from "element-plus";

type key = 'menu' | 'navigation';
type formMap = {
    [keys in key]: FormRules;
};
const FORM_RULES_MAP: formMap = {
    'menu' : {
        title: [
            { required: true, message: '请输入标题!', trigger: 'blur' },
        ],
        order: [
            { required: true, message: '请输入顺序!', trigger: 'blur' },
        ]
    },
    'navigation': {
        menuId: [
            { required: true, message: '请选择对应的菜单!', trigger: 'change' },
        ],
        description: [
            { required: true, message: '请输入描述信息!', trigger: 'blur' },
        ],
        link: [
            { required: true, message: '请输入导航链接!', trigger: 'blur' },
        ],
        openType: [
            { required: true, message: '请选择打开链接的方式!', trigger: 'change' },
        ],
        title: [
            { required: true, message: '请输入标题!', trigger: 'blur' },
        ],
        order: [
            { required: true, message: '请输入顺序!', trigger: 'blur' },
        ]
    }
}
export const useFormHooks = (key: key ) => {
    const getFormRules = () => {
        return FORM_RULES_MAP[key];
    }

    return {
        getFormRules,
    }
}