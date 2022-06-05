/* eslint-disable no-unused-vars */
// const n1={
//     data:100
// };
// const n2={
//     data:200
// };
// n1.next=n2;
// console.log(n1)
//***************************************** */
class Node{
  constructor(data,next=null){
    this.data=data;
    this.next=next;
  }
}
// const n1=new Node(100);
// console.log(n1);

class LinkedList{
  constructor(){
    this.head=null;
    this.size=0;
  }
  // insert first node
  insertFirst(data){
    this.head=new Node(data,this.head);
    this.size++;
  }
  // insert last node
  insertLast(data){
    let node=new Node(data);
    let current;
    // if empty make head
    if(!this.head){
      this.head=node;
    }else {
      current=this.head;
      while(current.next){
        current=current.next;
      }
      current.next=node;
    }
    this.size++;
  }
  // insert at index
  insertAt(data,index){
    if(index>0 && index>this.size){
      return;
    }
    // if firs index
    if(index===0){
      this.head=new Node(data,this.head);
      return;
    }
    const node=new Node(data);
    let current,previous;

    //set current to first
    current=this.head;
    let count =0;
    while(count<index){
      previous=current; // node before index
      count++;
      current=current.next; // node after index
    }
    node.next=current;
    previous.next=node;
    this.size++;
  }
  // get an index
  getAt(index){
    let current=this.head;
    let count=0;

    while(current){
      if(count==index){
        return current.data;
      }
      count++;
      current=current.next;
    }

  }
  // get data by it name
  getSpecificData(data){
    let current=this.head;
    let count=0;
    while(current){
      if (current.data===data){
        return true;
      }else{
        current=current.next;
      }
    }
    return false;
  }
  // remove at index
  removeAtt(index){
    if(index>0 && index>this.size){
      return;
    }
    let current=this.head;
    let previous;
    let count=0;
    // remove first
    if(index===0){
      this.head=this.next;
    }else {
      while(count<index){
        count++;
        previous=current;
        current=current.next;
      }
      previous.next=current.next;
    }
    this.size--;
  }
  // clear list
  clearList(){
    this.head=null;
    this.size=0;
  }
  // print list data
  printListData(){
    let current=this.head;
    let allList='';
    let list='';
    while(current){
      list+='{'+current.data+'} -> ';
      allList=list;
      current=current.next;
    }

    allList=allList +'NULL';
    console.log(allList);
    return allList;
  }
}

const ll=new LinkedList();
ll.insertFirst('first');
ll.insertFirst('second');
// console.log(getSpecificData("first"));
// ll.removeAtt(1);
// ll.getAt(1);
ll.printListData();
// ll.insertFirst("first");
// ll.insertFirst("second");
// console.log(ll.getAt(0))
console.log(ll.getSpecificData('second'));
// console.log(ll.head.next)
// console.log(ll.head.data)
// console.log(ll.size)
module.exports=LinkedList;
