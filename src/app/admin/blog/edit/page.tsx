
'use client';

import { useEffect, useState } from 'react';
import PostForm from '../PostForm';

export default function EditPostPage() {
  const [postId, setPostId] = useState<number | null>(null);
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get('id'));

    if (Number.isInteger(id) && id > 0) {
      setPostId(id);
    } else {
      setInvalid(true);
    }
  }, []);

  if (invalid) {
    return (
      <div className="p-6 text-red-600">
        شناسه پست معتبر نیست.
      </div>
    );
  }

  if (postId === null) {
    return (
      <div className="p-6">
        در حال بارگذاری...
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-gray-800">
        ویرایش پست
      </h1>
      <PostForm postId={postId} />
    </div>
  );
}
