import axios from "axios";
export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        //Authorization:"Bearer b7qQlhSuoaMyGhE9bro5BO_dRzBGMtU7gzyhDbTp17QBbS_iefAwRqJ3C7KJHbVNrWP0idi0pIwNhFqR7fa9I6syxEifBxs_XOCkgwaM6ioDgHpgiBFIGawCOtcKZnYx"
        //Authorization:"Bearer iJrGWR85tLK5MccNdc5V6mMcH8V-X3j4Tr8aSySjHvjZfOfQMd1YY2QdTIL_5M01LAKwMZH4GuPj7LHThg-816AE8jXh3d65Lcg6nEcvb1WNv8LZT_VsNXIrbxlrZnYx"
        Authorization:"Bearer pPKeCCgkmvQwrWviLqLe0-Izc7fOKqga4dM1-vvVKsjzTRUMYG6tjBZP6wrmfei4YDCiIyelZGB2rFKZxCUNouIQUFw4vVjc3-_wD-utOzx5DgmhB7gXywxkCB1rZnYx"
    }
});