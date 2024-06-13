export const updateRecentPosts = (
  notice_id: string,
  maxPosts: number,
): string[] => {
  let recentPostsFromLocalStorage = localStorage.getItem('recentPosts');

  let recentPosts: string[] = [];
  if (recentPostsFromLocalStorage) {
    recentPosts = JSON.parse(recentPostsFromLocalStorage);
  }

  recentPosts.unshift(notice_id);
  recentPosts = recentPosts.slice(0, maxPosts);

  localStorage.setItem('recentPosts', JSON.stringify(recentPosts));

  return recentPosts;
};
