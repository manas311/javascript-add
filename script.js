let data= [];

$("#formControl").on("submit", e=> {
    e.preventDefault()
    const no = $("#srno").val();
    const name = $("#name").val();
    data.push({name, srno: no});
    $("#srno").val("");
    $("#name").val("");
    showData();
})

const deleteData = (no) => {
    let flag=0;
    let index = -1
    data.forEach((d, i) => {
        if(d.srno === no) {
            flag=1;
            index = i;
        }
    });
    data.splice(index,1);
    showData()
}

const showData = () => {
    const ele =   document.getElementById('result');
	let htmlString = '';
	
	data.forEach(d => {
		htmlString += `
		<div>
            <h3>${d.srno}.&emsp;${d.name}&emsp;&emsp;&emsp;&emsp;<button type="button" onclick="deleteData(${d.srno})">Delete</button></h3>
        </div>
		`
	});
  
	ele.innerHTML = htmlString;
}