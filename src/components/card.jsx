export default function Card({ title, description }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  )
}