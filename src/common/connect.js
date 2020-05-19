import { connect } from 'react-redux';
import { assignWith } from 'lodash';
// 获取变量类型
function getVarType(s) { return Object.prototype.toString.call(s); }

export default function(modelNames, componentName) {
    let type = getVarType(modelNames);
    if (type === '[object String]' || type === '[object Array]') {
        if (type === '[object String]') modelNames = [modelNames];
        const mapState = (state) => {
            let res = { loading: {} };
            modelNames.forEach((modelName) => {
                res[modelName] = state[modelName];
                Object.assign(res.loading, state.loading.effects[modelName]);
            });
            return res;
        };
        const mapDispatch = (dispatch) => {
            let res = { dispatch };
            modelNames.forEach((modelName) => {
                if (dispatch[modelName].init) dispatch[modelName].init(componentName);
                assignWith(res.dispatch, dispatch[modelName], (objValue, srcValue, key, object, source) => {
                    if (srcValue && objValue) {
                        console.warn(`${modelName}'s ${key} is conflict with before model, please use dispatch.${modelName}.${key}`);
                        return objValue;
                    }
                    return undefined;
                });
                // Object.assign(res.dispatch, dispatch[modelName]);
            });
            return res;
        };
        return connect(mapState, mapDispatch);
    }
    return connect();
}
