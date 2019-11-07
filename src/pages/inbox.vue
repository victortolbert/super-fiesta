<template>
  <div class="h-screen flex flex-col">
    <header class="flex flex-shrink-0">
      <div class="flex-shrink-0 w-64 py-3 px-4 bg-gray-800">
        <button class="block w-full flex items-center">
          <img
            class="h-8 w-8 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
            alt=""
          >
          <span class="ml-4 mr-2 font-medium text-sm text-white">
            John Williams
          </span>
          <svg
            class="ml-auto h-6 w-6 stroke-current text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-between px-6 bg-gray-700">
        <nav class="flex">
          <a
            href="#"
            class="inline-block ml-2 px-3 py-2 bg-gray-800 rounded-lg leading-none text-sm font-medium text-white hover:bg-gray-600"
          >
            Mailbox
          </a>
          <a
            href="#"
            class="inline-block ml-2 px-3 py-2 rounded-lg leading-none text-sm font-medium text-white hover:bg-gray-600"
          >
            Customers
          </a>
          <a href="#" class="inline-block ml-2 px-3 py-2 rounded-lg leading-none text-sm font-medium text-white hover:bg-gray-600">
            Reporting
          </a>
          <a href="#" class="inline-block ml-2 px-3 py-2 rounded-lg leading-none text-sm font-medium text-white hover:bg-gray-600">
            Manage
          </a>
        </nav>
        <div class="flex items-center">
          <div class="relative w-64">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                class="w-5 h-5 stroke-current text-gray-500"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </span>

            <input
              class="block w-full pl-10 pr-4 py-2 leading-tight  bg-gray-900 rounded-lg text-sm placeholder-gray-400 text-white focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none"
              placeholder="Search"
            >
          </div>
          <button class="ml-5 text-gray-400 hover:text-gray-200">
            <svg
              class="w-5 h-5 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </button>
          <button class="ml-3 text-gray-400 hover:text-gray-200">
            <svg
              class="w-5 h-5 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
            </svg>
          </button>
        </div>
      </div>
    </header>
    <div class="flex-1 flex">
      <div class="w-64 p-6 bg-gray-100">
        <nav>
          <h2 class="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Mailboxes
          </h2>
          <div class="mt-3">
            <a
              href="#"
              class="mt-2 -mx-3 py-1 px-3 flex items-center justify-between text-sm font-medium bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg
                  viewBox="0 0 24 24"
                  class="h-6 w-6 stroke-current text-gray-500"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M22 12h-6l-2 3h-4l-2-3H2" />
                  <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
                </svg>
                <span class="ml-2 text-gray-700">Inbox</span>
              </span>
              <span class="inline-block w-8 py-1 text-center leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">
                6
              </span>
            </a>
            <a
              href="#"
              class="mt-2 -mx-3 py-1 px-3 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg class="h-6 w-6 stroke-current text-gray-500" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
                </svg>
                <span class="ml-2 text-gray-700">Flags</span>
              </span>
            </a>
            <a
              href="#"
              class="mt-2 -mx-3 py-1 px-3 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg
                  viewBox="0 0 24 24"
                  class="h-6 w-6 stroke-current text-gray-500"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                <span class="ml-2 text-gray-700">Drafts</span>
              </span>
              <span class="inline-block w-8 py-1 text-center leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">
                2
              </span>
            </a>
            <a
              href="#"
              class="mt-2 -mx-3 py-1 px-3 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg
                  viewBox="0 0 24 24"
                  class="h-6 w-6 stroke-current text-gray-500"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
                <span class="ml-2 text-gray-700">Assigned</span>
              </span>
              <span class="inline-block w-8 py-1 text-center leading-none text-xs font-semibold text-gray-700 bg-gray-300 rounded-full">
                1
              </span>
            </a>
            <a
              href="#"
              class="mt-2 -mx-3 py-1 px-3 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg
                  viewBox="0 0 24 24"
                  class="h-6 w-6 stroke-current text-gray-500"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span class="ml-2 text-gray-700">Closed</span>
              </span>
            </a>
            <a
              href="#"
              class="mt-2 -mx-3 py-1 px-3 flex items-center justify-between text-sm font-medium hover:bg-gray-200 rounded-lg"
            >
              <span class="inline-flex">
                <svg
                  viewBox="0 0 24 24"
                  class="h-6 w-6 stroke-current text-gray-500"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <polyline points="21 8 21 21 3 21 3 8" />
                  <rect x="1" y="3" width="22" height="5" />
                  <line x1="10" y1="12" x2="14" y2="12" />
                </svg>
                <span class="ml-2 text-gray-700">Junk</span>
              </span>
            </a>
          </div>
          <h2 class="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Folders
          </h2>
          <div class="mt-4">
            <a href="#" class="block text-sm font-medium text-gray-700">Refunds</a>
            <a href="#" class="block mt-4 text-sm font-medium text-gray-700">Refunds</a>
            <a href="#" class="block mt-4 text-sm font-medium text-gray-700">Bugs</a>
          </div>
        </nav>
      </div>
      <main class="flex-1 flex bg-gray-200">
        <div class="w-full max-w-xs flex-grow border-l border-r">
          <div class="px-4 py-2 flex items-center justify-between border-b">
            <button class="flex items-center text-xs font-semibold text-gray-600">
              Sorted by Date
              <svg
                class="ml-auto w-6 h-6 stroke-current text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <button>
              <svg
                class="w-6 h-6 stroke-current text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
              </svg>
            </button>
          </div>
          <div>
            <a href="#" class="block px-6 pt-3 pb-4 bg-white">
              <div class="flex justify-between">
                <span class="text-sm font-semibold text-gray-900">
                  Gloria Robertson
                </span>
                <span class="text-sm text-gray-600">
                  2 days ago
                </span>
              </div>
              <p class="text-sm text-gray-900">
                Refund
              </p>
              <p class="mt-2 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nunc
                tempus element...
              </p>
            </a>
          </div>
        </div>
        <div class="flex-1 p-8 bg-red-500" />
      </main>
    </div>
  </div>
</template>
