import './App.css'


function App() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-2xl">
        <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mb-5">
          Tailwind CSS Active
        </span>

        <h1 className="text-4xl font-bold text-slate-900 mb-3">
          Hello, Aqua Explorer!
        </h1>

        <p className="text-slate-500 leading-relaxed mb-6">
          Your underwater world is about to begin. Let's create something
          beautiful.
        </p>

        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-colors">
          Explore the Ocean
        </button>
      </div>
    </main>
  );
}

export default App;
