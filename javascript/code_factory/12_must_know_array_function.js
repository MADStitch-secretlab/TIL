/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];

console.log(iveMembers);
console.log(iveMembers.push('코드팩토리')); // console로 묶으면 iveMembers에 코드팩토리를 집어넣고 전체적인 길이를 출력
console.log(iveMembers);

console.log(iveMembers.pop()); //어레이에서 맨 마지막꺼 뭔지 보여주고 없애주는 애가 .pop
console.log(iveMembers.shift()); //어레이에서 맨 처음꺼 뭔지 보여주고 없애주는애사 .shift

console.log(iveMembers.unshift('안유진')); // 맨처음에 추가해주는애 근데  unpop은 없네
console.log(iveMembers.splice(0,3)); // 0번부터 3개까지 삭제

//concat()
console.log(iveMembers.concat('코드팩토리')); // push랑 비슷은 하나 원래 어레이에 넣는것이 아닌 새로운 어레이에 저장하는것
console.log(iveMembers);
const ivem = iveMembers.concat('z코드팩토리')
console.log(ivem);

//slice()
console.log(iveMembers.slice(0 ,3)); // splice와 비슷해 보이나 0부터 2번 index까지 삭제

// spread operator
let iveMembers2 = [
    ...iveMembers
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers
];
console.log(iveMembers3); // ...의 유무는 array의 내용을 가져올 것인가 아니면 어레이 자체를 싹다 가져올것인가의 차이에 있다


// join()
console.log(iveMembers.join());
console.log(iveMembers.join('/'));

//sort()
//오름차순
//reverse()
//내림차순
iveMembers.sort();
console.log(iveMembers);

const stitch = [
    1,
    6,
    5,
    2,
    9,
    20,
];

/**
 * a,b를 비교했을때
 * 1) a를b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
 * 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
 * 3) 원래 순서를 그대로 두려면 0을 반환
 * */
console.log(stitch);
stitch.sort((a,b) => {
    return a > b ? 5 : -1;
});
console.log(stitch);

//map()
console.log(stitch.map((x) => x));
console.log(stitch.map((x)=> `stitch : ${x}`));

const blackpink = ['지수','리사','로제','제니'];
console.log(blackpink.map((x) => {
    if(x === '지수'){
        return `blackpink: ${x}`;
    }else{
        return x;
    }
}));


//filter()
numbers = [1,8,7,6,3];
console.log(numbers.filter((x) => x %2 ===0));

//find()
numbers = [1,8,7,6,3];
console.log(numbers.find((x) => x %2 ===0)); // 앞에서 부터 진행 했을때 처음 나오는 값을 찾으면 정지
/**
 * 결과치는 값만 나옴
 */

//findIndex()
console.log(numbers.findIndex((x) => x %2 ===0)); // 앞에서 부터 진행 했을때 처음 나오는 값의 인덱스 값을 찾으면 반환

//reduce()
numbers = [1,8,7,6,3];
console.log(numbers.reduce((p,n) => p+n, 1));