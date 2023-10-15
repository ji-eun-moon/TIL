import { NextPage } from "next";
import Image from 'next/image'
import DogImage from '../public/image/dog.jpeg'

const ImageSample: NextPage<void> = (props) => {
    return (
        <div>
            <h1>이미지 표시 비교</h1>
            <p>img 태그로 표시한 경우</p>
            {/* 일반적인 img 태그를 사용해서 이미지를 표시한다. */}
            <img src="/image/dog.jpeg" />
            <p>Image 컴포넌트로 표시한 경우</p>
            {/* Image 컴포넌트를 사용해서 표시한다. */}
            {/* 경로를 지정하는 대신, 임포트한 이미지를 지정 */}
            <Image src={DogImage} alt="dog image"/>
            <p>Image로 표시한 경우는 사전에 그리기 영역이 표시된다.</p>
        </div>
    )
}

export default ImageSample