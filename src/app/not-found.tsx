import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-px py-20">
      <div className="card p-8">
        <h1 className="text-2xl font-semibold">الصفحة غير موجودة</h1>
        <p className="p-muted mt-2">قد يكون الرابط خطأ أو الصفحة تم نقلها.</p>
        <Link className="btn mt-6 w-fit" href="/">العودة للرئيسية</Link>
      </div>
    </div>
  );
}
