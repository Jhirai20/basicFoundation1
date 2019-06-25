//1) Get 1 to 255
function get1to255Arr() {
	var arr=[];
	for (var i = 1; i <=255; i++) {
		arr.push(i)
	}
	return arr
}
console.log(get1to255Arr());

//2) Get even 1000
function getEven1000() {
	var sum=0;
	for (var i = 1; i <=255; i++) {
		if (i%2==0) {
			sum+=i;
		}
	}
	return sum
}
console.log(getEven1000());

//3) Sum odd 5000
function sumOdd5000() {
	var sum=0;
	for (var i = 1; i <=5000; i++) {
		if (i%2!=0) {
			sum+=i;
		}
	}
	return sum
}
console.log(sumOdd5000());

//4) Iterate an array
function sumArray(arr) {
	var sum=0;
	for (var i = 0; i <arr.length; i++) {
		sum+=arr[i];
	}
	return sum
}
console.log(sumArray([1,2,5]));
console.log(sumArray([-5,2,5,12]));

//5) Find max
function max(arr) {
	var max=arr[0];
	for (var i = 0; i <arr.length; i++) {
		if (arr[i]>max) {
			max=arr[i];
		}
	}
	return max
}
console.log(max([-3,3,5,7]));

//6) Find average 
function avg(arr) {
	var sum=0;
	for (var i = 0; i <arr.length; i++) {
		sum+=arr[i];
	}
	var avg=sum/arr.length
	return avg
}
console.log(avg([1,3,5,7,20]));

//7) Array odd 
function oddArr() {
	var arr=[];
	for (var i = 1; i <=50; i++) {
		if (i%2!==0) {
			arr.push(i)
		}
	}
	return arr
}
console.log(oddArr());

//8) Greater than Y
function greaterThanY(arr,Y) {
	var count=0
	for (var i = 1; i <=50; i++) {
		if (arr[i]>Y) {
			count++;
		}
	}
	return count
}
console.log(greaterThanY([1, 3, 5, 7] ,3));

//9) Squares 
function square(arr) {
	for (var i = 0; i <arr.length; i++) {
		arr[i]=arr[i]*arr[i];
	}
	return arr
}
console.log(square([1,5,10,-2]));

//10) Negatives 
function Negatives(arr) {
	for (var i = 0; i <arr.length; i++) {
		if (arr[i]<0) {
			arr[i]=0;
		}
	}
	return arr
}
console.log(Negatives([1,5,10,-2]));

//11) Max/Min/Avg 
function arrAnal(arr) {
	var arrnew=[], max=arr[0], min=arr[0], sum=0
	for (var i = 0; i <arr.length; i++) {
		sum+=arr[i];
		if (arr[i]>max) {
			max=arr[i];
		}
		if (arr[i]<min) {
			min=arr[i];
		}
	}
	var avg=sum/arr.length
	arrnew.push(max);
	arrnew.push(min);
	arrnew.push(avg);
	return arrnew;
}
console.log(arrAnal([1,5,10,-2]));

//12) Swap Values 
function SwapValues(arr) {
	var temp=0
	temp=arr[0];
	arr[0]=arr[arr.length-1];
	arr[arr.length-1]=temp;
	return arr;
}
console.log(SwapValues([1,5,10,-2]));

//13) Number to String 
function dojoArr(arr) {
	for (var i = 0; i <arr.length; i++) {
		if (arr[i]<0) {
			arr[i]='Dojo';
		}
	}
	return arr;
}
console.log(dojoArr([-1,-3,2]));