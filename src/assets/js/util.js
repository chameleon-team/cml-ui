import cml from 'chameleon-api'

export function pxTransform(s) {
    if (!s) return '';
    if (!!~s.indexOf('cpx')) {
        return s.replace(/(-?\d*\.?\d*)cpx/ig, (matchs, $1) => {
            return cml.cpx2px(Number($1)) + 'px';
        });
    }
   return s;
}

export function cmlStyleTransfer (str) {
    if (!str) return {};
    let styleAry = str.split(';');
    let obj = {};
    styleAry.forEach(element => {
        let classObj = element.split(':');
        let className = String(classObj[0]).replace(/(^\s*)|(\s*)$/g,"");
        if (className) {
            let classValue = pxTransform(String(classObj[1]).replace(/(^\s*)|(\s*)$/g,""));
            obj[className] = classValue;
        }
    });
    return obj;
}
