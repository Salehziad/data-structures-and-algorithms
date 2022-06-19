/* eslint-disable no-unused-vars */
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
  getAtK(index){
    index=this.size-index-1;
    let current=this.head;
    let count=0;
    while(current){
      if(index>=this.size || index<0){
        return 'Exception';
      }
      else if(count===index){
        return current.data;
      }
      count++;
      current=current.next;
      console.log(current);
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
  ziperList(head1,head2){
    let tail=head1.head;
    let current1=head1.head.next;
    let current2=head2.head;
    let count=0;
    while(current1&&current2){
      if(count%2===0){
        tail.next=current2;
        current2=current2.next;
      }else {
        tail.next=current1;
        current1=current1.next;
      }
      tail=tail.next;
      count++;
    }
    if(current1) tail.next=current1;
    if(current2) tail.next=current2;
    return head1;
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

    allList=allList +'x';
    console.log(allList);
    return allList;
  }
}

const ll=new LinkedList();
ll.insertLast('2');
ll.insertLast('3');
ll.insertLast('4');
const ll2=new LinkedList();
ll2.insertLast('a');
ll2.insertLast('b');
ll2.insertLast('c');
ll.printListData();
const ll3=new LinkedList();
ll3.ziperList(ll,ll2);
// ll3.zipLists(ll,ll2);
ll2.printListData();
ll3.printListData();
// ll.insertLast('q')         1
// ll.insertBefore('x','66')  2
// ll.insertAfter('z','10')   3
console.log('**********************');

module.exports=LinkedList;
