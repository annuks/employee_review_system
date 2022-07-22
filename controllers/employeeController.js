module.exports.employee = (req,res)=>{

    return res.render('employee',{
        title:'Employee'});
}

module.exports.empployeeDetails = (req,res)=>{
    console.log("PAram",req.params.id);
    return res.render('employeeDetail',{
        title:'Employee'
    });
}