'use static';

function domHelper() {
    return {
        walkTheDom(node, func) {
            func.call(this, node);
            node = node.firstChild;
            while (node) {
                this.walkTheDom(node, func);
                node = node.nextSibling;
            }
        },

        findElementsByAttribute(attr, value) {
            const results = [];

            this.walkTheDom(document.body, node => {
                const traversedAttr = node.nodeType === 1 && node.getAttribute(attr);
                if (typeof traversedAttr === 'string' && traversedAttr === value) {
                    results.push(node);
                }
            });
            return results;
        },

        findText(text) {
            const results = [];

            this.walkTheDom(document.body, node => {
                if (node.nodeType === 3) {
                    if (node.textContent.indexOf(text) !== -1) {
                        results.push(node);
                    }
                }
            });
            return results;
        }
    };
}

const helper = domHelper();
console.log(helper.findElementsByAttribute('id', 'title'))
console.log(helper.findText('London'));

module.exports.domHelper = domHelper;

