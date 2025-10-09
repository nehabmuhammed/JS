let str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

let array1 = str.split(' ');
let duplicateElement = [];

for(let i = 0; i<=array1.length -1 ;i++){
    for(let j = 1+ i;j<= array1.length - 1;j++){

        if(array1[i] == array1[j]){
            if(duplicateElement.includes(array1[i])){
            break;
        }else{
            duplicateElement.push(array1[i]);
        }
        }
    }
}
console.log(duplicateElement)