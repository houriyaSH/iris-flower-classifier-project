let trainingData = [];

let minValues = [];
let maxValues = [];


// خواندن دیتاست
window.onload = function(){

    Papa.parse("iris.csv", {

        download: true,

        header: true,


        complete: function(results){


            results.data.forEach(row => {


                if(row.SepalLengthCm){


                    trainingData.push({

                        features:[

                            Number(row.SepalLengthCm),
                            Number(row.SepalWidthCm),
                            Number(row.PetalLengthCm),
                            Number(row.PetalWidthCm)

                        ],

                        label: row.Species

                    });

                }


            });



            normalizeData();


            console.log("Dataset ready");

            console.log(trainingData);


        }

    });

};





// نرمال سازی داده‌ها

function normalizeData(){


    for(let i = 0; i < 4; i++){


        let values = trainingData.map(item => item.features[i]);


        minValues[i] = Math.min(...values);

        maxValues[i] = Math.max(...values);


    }



    trainingData.forEach(item => {


        item.features = item.features.map((value,index)=>{


            return (value - minValues[index]) /
            (maxValues[index] - minValues[index]);


        });


    });


}






// محاسبه فاصله بین دو نمونه

function distance(a,b){


    return Math.sqrt(

        (a[0]-b[0])**2 +
        (a[1]-b[1])**2 +
        (a[2]-b[2])**2 +
        (a[3]-b[3])**2

    );


}








function predict(){



    // گرفتن مقدارهای وارد شده توسط کاربر

    let values = [


        document.getElementById("sepalLength").value,

        document.getElementById("sepalWidth").value,

        document.getElementById("petalLength").value,

        document.getElementById("petalWidth").value


    ];





    // بررسی خالی بودن ورودی‌ها

    for(let value of values){


        if(value.trim() === ""){


            alert("Please enter all flower measurements!");

            return;


        }


    }






    // تبدیل رشته به عدد

    let input = values.map(Number);






    // بررسی عدد بودن

    for(let value of input){


        if(isNaN(value)){


            alert("Please enter numbers only!");

            return;


        }


    }







    // بررسی آماده بودن مدل

    if(trainingData.length === 0){


        alert("Model is not ready yet!");

        return;


    }







    // بررسی محدوده منطقی مقادیر Iris

    if(

        input[0] < 4 || input[0] > 8 ||
        input[1] < 1.5 || input[1] > 5 ||
        input[2] < 0.5 || input[2] > 8 ||
        input[3] < 0.1 || input[3] > 3


    ){


        alert("Values are outside the Iris flower range!");

        return;


    }







    // نرمال کردن ورودی کاربر

    input = input.map((value,index)=>{


        return (value - minValues[index]) /
        (maxValues[index] - minValues[index]);


    });








    // محاسبه فاصله با تمام نمونه‌ها

    let neighbors = trainingData.map(item => {


        return {


            label: item.label,


            dist: distance(input,item.features)


        };


    });








    // مرتب کردن از نزدیک‌ترین

    neighbors.sort((a,b)=>a.dist-b.dist);






    // تعداد همسایه‌ها

    let k = 5;



    let votes = {};






    // رای گیری

    for(let i = 0; i < k; i++){


        let label = neighbors[i].label;


        votes[label] = (votes[label] || 0) + 1;


    }






    // انتخاب بیشترین رای

    let prediction = Object.keys(votes).reduce((a,b)=>{


        return votes[a] > votes[b] ? a : b;


    });







    // نمایش نتیجه

 let speciesName;
let flowerEmoji;


if(prediction === "Iris-setosa"){

    speciesName = "Iris Setosa";
    flowerEmoji = "🌸";

}


else if(prediction === "Iris-versicolor"){

    speciesName = "Iris Versicolor";
    flowerEmoji = "🌺";

}


else if(prediction === "Iris-virginica"){

    speciesName = "Iris Virginica";
    flowerEmoji = "🌷";

}



document.getElementById("result").innerHTML =

flowerEmoji + " " + speciesName;



}










function resetForm(){


    document.getElementById("sepalLength").value = "";

    document.getElementById("sepalWidth").value = "";

    document.getElementById("petalLength").value = "";

    document.getElementById("petalWidth").value = "";


    document.getElementById("result").innerHTML = "";


}