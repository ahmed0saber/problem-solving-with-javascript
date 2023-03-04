// const mergeTwoSortedLists = (list1, list2) => {
//     let a=0, b=0, mergedList = []
//     for(let i=0; i<list1.length+list2.length; i++) {
//         if(list1[a]<=list2[b]){
//             mergedList.push(list1[a])
//             a++
//         }else{
//             mergedList.push(list2[b])
//             b++
//         }
//     }
//     return mergedList
// }

// const mergeTwoSortedLists = (list1, list2) => {
//     if(list1 == null)
//         return list2
//     if(list2 == null)
//         return list1
//     if(list1.data >= list2.data){
//         list1.next = mergeTwoSortedLists(list1.next, list2)
//         return list1
//     }else{
//         list2.next = mergeTwoSortedLists(list1, list2.next)
//         return list2
//     }
// }

const mergeTwoSortedLists = (list1, list2) => {
    let curr = new ListNode()
    const dummy = curr
    while(list1 && list2){
        if(list1.val<=list2.val){
            curr.next = list1
            list1 = list1.next
        }else{
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }
    if(list1){
        curr.next = list1
    }
    if(list2){
        curr.next = list2
    }
    return dummy.next
}

console.log(mergeTwoSortedLists([1,2,4], [1,3,4]))
console.log(mergeTwoSortedLists([], []))
console.log(mergeTwoSortedLists([], [0]))