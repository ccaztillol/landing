import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="bg-white">
    <!-- Header -->
    <header class="fixed w-full bg-white shadow-sm z-50">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold text-primary">Invoicify</div>
          <div class="hidden md:flex space-x-8">
            <a href="#features" class="text-gray-600 hover:text-primary">Features</a>
            <a href="#how-it-works" class="text-gray-600 hover:text-primary">How it Works</a>
            <a href="#pricing" class="text-gray-600 hover:text-primary">Pricing</a>
          </div>
          <a href="#contact" class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90">
            Get Started
          </a>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 bg-gradient-to-b from-indigo-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl font-bold text-gray-900 mb-6">
            Automate Your Invoice Processing with AI
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Transform supplier invoices into standardized data ready for your ERP system. 
            Save time and reduce errors with our intelligent processing system.
          </p>
          <div class="flex justify-center gap-4">
            <a href="#demo" class="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90">
              Request Demo
            </a>
            <a href="#learn-more" class="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 rounded-lg bg-white shadow-lg">
            <div class="text-primary text-2xl mb-4">🔍</div>
            <h3 class="text-xl font-semibold mb-2">Multi-Format Support</h3>
            <p class="text-gray-600">Process invoices in PDF, images, or scanned documents with ease.</p>
          </div>
          <div class="p-6 rounded-lg bg-white shadow-lg">
            <div class="text-primary text-2xl mb-4">🤖</div>
            <h3 class="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
            <p class="text-gray-600">Advanced AI extracts and validates invoice data automatically.</p>
          </div>
          <div class="p-6 rounded-lg bg-white shadow-lg">
            <div class="text-primary text-2xl mb-4">🔄</div>
            <h3 class="text-xl font-semibold mb-2">ERP Integration</h3>
            <p class="text-gray-600">Seamlessly connect with your existing ERP system via our API.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it Works -->
    <section id="how-it-works" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div class="max-w-3xl mx-auto">
          <div class="flex flex-col gap-8">
            <div class="flex items-start gap-4">
              <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Upload Invoices</h3>
                <p class="text-gray-600">Submit your supplier invoices in any format through our secure portal or API.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <h3 class="text-xl font-semibold mb-2">AI Processing</h3>
                <p class="text-gray-600">Our AI analyzes the documents, extracting key information and standardizing the data.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <h3 class="text-xl font-semibold mb-2">ERP Integration</h3>
                <p class="text-gray-600">Processed data is sent to your ERP system, creating draft invoices ready for review.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-primary">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Ready to Streamline Your Invoice Processing?</h2>
        <p class="text-white/90 mb-8 max-w-2xl mx-auto">
          Join hundreds of businesses that have automated their invoice processing with Invoicify.
        </p>
        <a href="#contact" class="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 inline-block">
          Get Started Today
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="text-2xl font-bold mb-4">Invoicify</div>
            <p class="text-gray-400">Automating invoice processing with artificial intelligence.</p>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Product</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#features" class="hover:text-white">Features</a></li>
              <li><a href="#pricing" class="hover:text-white">Pricing</a></li>
              <li><a href="#demo" class="hover:text-white">Request Demo</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Company</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#about" class="hover:text-white">About</a></li>
              <li><a href="#blog" class="hover:text-white">Blog</a></li>
              <li><a href="#careers" class="hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Legal</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#privacy" class="hover:text-white">Privacy Policy</a></li>
              <li><a href="#terms" class="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Invoicify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
`