import features from "../data/features.json"
export default function Features() {

  return (
    <section className="bg-gray-50 p-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center max-w-100">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl text-gray-600 font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-2">{feature.description}</p>
              <a href="#" className="text-gray-600 underline font-bold ">
                {feature.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
