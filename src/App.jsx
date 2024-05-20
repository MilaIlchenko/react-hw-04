import { useEffect, useState } from "react";
import { fetchImages } from "./image-api";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import NotFoundError from "./components/NotFoundError/NotFoundError";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [notFoundError, setNotFoundError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [likes, setLikes] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      try {
        setError(false);
        setLoading(true);
        setNotFoundError(false);

        const newImages = await fetchImages(page, query);

        if (newImages.length === 0) {
          setNotFoundError(true);
        } else {
          setImages((prevImages) => [...prevImages, ...newImages]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (url, like, nameUser) => {
    setImageUrl(url);
    setLikes(like);
    setUserName(nameUser);
    toggleModal();
  };

  const toggleModal = () => {
    setModal((prevModal) => !prevModal);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery onImgClick={openModal} items={images} />}
      {notFoundError && <NotFoundError />}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      {modal && (
        <ImageModal
          image={imageUrl}
          imgModal={modal}
          item={images}
          onModalClose={toggleModal}
          imgLikes={likes}
          user={userName}
        />
      )}
    </div>
  );
}
