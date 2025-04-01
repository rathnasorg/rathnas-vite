import { FC } from "react";
import { useAppSelector } from "../redux/hooks";
import { selectIsLoading } from "../redux/slices/appSlice";
import Layout from "./layout";
import { Dialog, DialogContent, DialogDescription, DialogOverlay, DialogTitle } from "./ui/dialog";

export interface LoadingProps {

}

const Loading: FC<LoadingProps> = (props: LoadingProps) => {
  const isLoading = useAppSelector(selectIsLoading);
  if (!isLoading) return null;
  return (
    <Layout title="Loading" description="Loading..." className="bg-gray-100" {...props}>
      <Dialog open={isLoading} onOpenChange={() => { }}>
        <DialogOverlay className="fixed inset-0 bg-gray-500 opacity-50" />
        <DialogContent className="bg-white rounded-lg shadow-lg p-6">
          <DialogTitle className="text-lg font-semibold">Loading...</DialogTitle>
          <DialogDescription className="mt-2 text-gray-600">
            Please wait while we load the content for you.
          </DialogDescription>
          <div className="flex items-center justify-center mt-4">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}

export default Loading;