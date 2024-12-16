import { useEffect, useState } from 'react';

const useDocumentTitle = ({ title, name }: { title?: string; name?: string }) => {
  const [documentTitle, setDocumentTitle] = useState<string>(`${title}: ${name}`);

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle, title, name]);

  return [documentTitle, setDocumentTitle];
};

export default useDocumentTitle;
