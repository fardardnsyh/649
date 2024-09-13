import VideoComp from "@/components/video/VideoComp";
import { AppContext } from "@/context/AppContext";
import dateFormat from "@/lib/utils/dateFormat";
import styles from "@/styles/video/VideoList.module.css";
import { useState, useEffect, useContext } from "react";
import ReactPaginate from "react-paginate";
import NotFound from "../utils/NotFound";

const VideoList = ({posts}: {posts: any}) => {
    const [dataArray, setDataArray] = useState(posts.slice(0, 50));
    const [pageNumber, setPageNumber] = useState(0);
    const {filterString, search} = useContext(AppContext)
    
    const pageDisplayNumber = 8;
    const itemsViewed = pageNumber * pageDisplayNumber;

    const newArrayList = dataArray.slice(itemsViewed, itemsViewed + pageDisplayNumber);

    const pageCount = Math.ceil(dataArray.length / pageDisplayNumber);

    const changePage = ({ selected } : {selected: number}) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        if (filterString === "All") {
            setDataArray(posts.slice(0, 50))
        } else {
            setDataArray(posts.filter((data: any) => data.fields.category === filterString))
        }
    }, [filterString, posts])

    useEffect(() => {
        if (search != "") {
            setDataArray(posts.filter((data: any) => {
                const title = data.fields.title as string;
                return title.toLowerCase().includes(search.toLowerCase());
            }))
        } else {
            setDataArray(posts.slice(0, 50))
        }
    }, [posts, search])

    return (
        (newArrayList.length === 0) ? <NotFound text={"video"} /> :
        <section className={styles.videoList}>
            <div className={styles.videoListItems}>
                {newArrayList.map((item: any, index: any) => {
                    return (
                        <VideoComp 
                            key={item.sys.id} 
                            idSlug={item.sys.id}
                            fullname={item.fields.author.fields.fullname} 
                            title={item.fields.title} 
                            description={item.fields.description}
                            date={dateFormat(item.fields.publishDate)}
                            link={item.sys.id} 
                            bannerImage={`https:${item.fields.displayImage.fields.file.url}`}
                            authorImage={`https:${item.fields.author.fields.authorImage.fields.file.url}`}
                        />
                    )
                })}
            </div>
            <div style={{
                position: "relative",
                width: "98%",
                margin: "2.8rem 0",
                padding: ".5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    onPageChange={changePage}
                    pageCount={pageCount}
                    containerClassName={styles.paginationBttns}
                    previousLinkClassName={styles.previousBttn}
                    nextLinkClassName={styles.nextBttn}
                    disabledClassName={styles.paginationDisabled}
                    activeClassName={styles.paginationActive}
                />
                <div className={styles.cutline}></div>
            </div>
        </section>
    )
}

export default VideoList;