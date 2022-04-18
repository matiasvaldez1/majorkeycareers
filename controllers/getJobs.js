import axios from 'axios'

export const getJobs = async() =>{
    const res = await axios("https://public-rest30.bullhornstaffing.com/rest-services/4607I9/search/JobOrder?start=0&query=(isOpen:1)%20AND%20(isDeleted:0)&fields=id,title,publishedCategory(id,name),address(city,state,countryName),employmentType,dateLastPublished,publicDescription,isOpen,isPublic,isDeleted,publishedZip,salary,salaryUnit&count=100&sort=-dateLastPublished&showTotalMatched=true");
    const data = await res.data.data
    return data
}
