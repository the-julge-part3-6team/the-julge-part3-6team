import { useState, useRef, useMemo } from "react";

const [isShowMore, setIsShowMore] = useState<boolean>(false);
// 글자수는 보고 수정
const textLimit = useRef<number>(250);
const commenter = useMemo(() => {
  const shortReview: string = comment.slice(0, textLimit.current) 
}
