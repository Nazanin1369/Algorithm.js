class TreeNode {
    children: Array<TreeNode>;
    parent: TreeNode;
    data: string;

    constructor(data:string) {
        this.data = data;
    }
}