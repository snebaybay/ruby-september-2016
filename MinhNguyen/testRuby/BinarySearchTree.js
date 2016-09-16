function BTNode(value) {
	this.val = value;
	this.left = null;
	this.right = null;
}
function BST(){
	this.root = null;
	this.remove = function(val){
		if(this.root === undefined){
			return false
		}else if(this.root.val == val){
			var current = this.root.left
			var prev;
			while (current.right != null){
				prev = current
				if (current.right){
					current = current.right
				}
			}
			prev.right = current.left
			current.left = this.root.left
			current.right = this.root.right
			this.root = current
		}else{
			var current = this.root
			var prev;
			while (current.val != val){
				prev = current
				if(current.val > val){
					if(current.right){
						current = current.right
					}else{
						return false
					}
				}else{
					if(current.left){
						current = current.left
					}else{
						return false
					}
				}
			}
			while (current.right != null && current.right == null){
				prev = current
				if (current.right){
					current = current.right
				}
			}
			prev.right = current.left
			current.left = this.root.left
			current.right = this.root.right
		}
	}
	this.printPreOrder = function(node){
		if (this.root == null){
			return
		} 
		if (node === undefined){
			node = this.root
		} else if(node == null){
			return 
		}
		console.log(node.val)
		this.printPreOrder(node.left)
		this.printPreOrder(node.right)
	}
	this.add = function(val){
		if (this.root == null) {
			this.root = new BTNode(val);
		}else{
			var current = this.root
			while (current){
				if(current.val <= val){
					if(current.right){
						current = current.right
					}else{
						current.right = new BTNode(val)
						return this
					}					
				} else {
					if(current.left){
						current = current.left
					}else{
						current.left = new BTNode(val)
						return this
					}					
				}
			}
		}
		return this
	}
	// this.add = function(val, node){
	// 	if (this.root == null) {
	// 		this.root = BTNode(val)
	// 	}else{
	// 		if (!node){
	// 			node = this.root
	// 		}
	// 		if(node.val <= val){
	// 			if(node.right){
	// 				this.add(val, current.right)
	// 			}else{
	// 				node.right = BTNode(val)
	// 			}					
	// 		} else {
	// 			if(node.left){
	// 				this.add(val, current.left) 
	// 			}else{
	// 				node.left = BTNode(val)
	// 			}					
	// 		}
	// 	}
	// 	return this
	// }
	this.contains = function(val, node){
		if (!node){
			node = this.root
		}
		if(node.val == val){
			return true
		}else{
			if(node.val <= val){
				if(node.right){
					return this.contains(val, node.right)
				}else{
					return false
				}	
			} else {
				if(node.left){
					return this.contains(val, node.left) 
				}else{
					return false
				}				
			}
		}
	}
	this.min = function(){
		
	}
	this.max = function(){

	}
	this.size = function(){

	}
	this.isEmpty = function(){

	}
	this.height = function(node){
		if (node === undefined){
			node = this.root
		}
		if(!node){
			return 0
		} else {
			var right = this.height(node.right) + 1
			var left = this.height(node.left) + 1
			return right > left ? right : left 
		}
	}


	this.isBalanced = function(node){
		if (!this.root){
			return true
		}
		if (!node) {
			node = this.root
		}
		if (!node.right){
			var right = 1
			var left = 1 + this.height(node.left)
		} else if(!node.left){
			var left = 1
			var right = 1 + this.height(node.right)
		} else {
			var right = this.height(node.right) + 1
			var left = this.height(node.left) + 1
		}
	}
}

var myBST = new BST
myBST.add(5).add(10).add(15).add(4).add(3).add(16)
console.log(myBST.height())
myBST.printPreOrder()
// console.log(myBST.isBalanced())


