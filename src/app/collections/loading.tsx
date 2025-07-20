import React from "react";
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center text-gray-700 dark:text-gray-200">
      <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
      <p className="text-lg font-medium">Fetching products for this category...</p>
    </div>
  );
};

export default Loading;
