import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import DataTable from '@/Components/DataTable';

export default function Subscribers(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
        >
            <Head title="Subscribers" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg overflow-x-auto">
                        <DataTable  subscribers={props.subs} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
