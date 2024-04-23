import LoadingShapes from '@/components/ux/LoadingShapes';

// * Component
export default function RootLoading() {
  // * Render
  return (
    <div className="fixed inset-0 h-screen w-screen bg-slate-200/50 backdrop-blur-sm z-50 !m-0">
      <LoadingShapes />
    </div>
  );
}
